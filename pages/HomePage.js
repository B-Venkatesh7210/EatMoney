import React, { useState, useEffect } from "react";
import Image from "next/image";
import Nft from "../assets/images/Sample NFT.svg";
import Navbar from "../components/Navbar";
import CurvedButton from "../components/CurvedButton";
import ProgressButton from "../components/ProgressButton";
import NftAtrributes from "../components/NftAtrributes";
import LevelUp from "../assets/logos/Level Up.png";
import EatCoin from "../assets/logos/EAT COIN.png";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import ReactModal from "react-modal";
import Button from "../components/Button";
import Matic from "../assets/logos/Polygon Matic.png";
import NftPlateMP from "../components/NftPlateMP";
import { useZxing } from "react-zxing";
import HistoryDetails from "../components/HistoryDetails";
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { BigNumber, ethers } from "ethers";
import { config } from "../config/config";
import { getCategory, getImage } from "../utils/utils";
import { toast } from "react-toastify";
import QrReader from "react-qr-scanner";

const HomePage = () => {
  const progress = 80;
  const [navStatus, setNavStatus] = useState({
    home: true,
    marketPlace: false,
    history: false,
  });
  const [isScanning, setIsScanning] = useState(false);
  const [qrData, setQrData] = useState({});
  //const [restaurantData, setRestaurantData] = useState({});
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [addPointsModal, setAddPointsModal] = useState(false);
  const [sellNftModal, setSellNftModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const [levelModal, setLevelModal] = useState(false);
  const [paymentConfirmModal, setPaymentConfirmModal] = useState(false);
  const [paymentSuccessModal, setPaymentSuccessModal] = useState(false);
  const [cleanModal, setCleanModal] = useState(false);
  const [sellingPrice, setSellingPrice] = useState();
  const [pointsData, setPointsData] = useState({
    efficiency: 0,
    fortune: 0,
    durability: 0,
  });
  const [apiPointsData, setApiPointsData] = useState({
    id: 0,
    efficiency: 0,
    fortune: 0,
    durability: 0,
    shiny: 0,
    category: "",
    level: 0,
    img: "",
  });
  const [totalPoints, setTotalPoints] = useState(10);
  const [apiTotalPoints, setApiTotalPoints] = useState(10);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState({});
  const [chooseCategory, setChooseCategory] = useState("Emerald");
  const [chooseLevel, setChooseLevel] = useState(1);
  const [hasNft, sethasNft] = useState(false);
  const router = useRouter();

  const [plates, setPlates] = useState([]);
  const [history, setHistory] = useState([]);
  const { isConnected, address } = useAccount();
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    signer
  );

  const buyPlate = async (plate) => {
    try {
      const tx = await contract.buyPlate(plate.id, {
        value: ethers.utils.parseEther(plate.price.toString()),
      });
      await toast.promise(tx.wait(), {
        pending: "Buying Plate",
        success: "Plate Bought Successfully 👌",
        error: "Error Buying Plate",
      });
      await getMarketItems();
    } catch (e) {
      toast.error(e.error.data.message.replaceAll("execution reverted: ", ""));
    }
  };

  //get all EatFinished events from contract
  const getHistory = async () => {
    const filters = contract.filters.EatFinished(apiPointsData.id);
    contract.queryFilter(filters).then((events) => {
      //put events data in history array

      const list = events.map(async (event) => {
        console.log(event.args);
        const restaurant = await contract.idToRestaurant(event.args[1]);
        const data = await (
          await fetch(
            "https://" +
              restaurant.info.replace("ipfs://", "") +
              ".ipfs.nftstorage.link"
          )
        ).json();
        return {
          restaurantId: event.args[1],
          restaurantName: data.name,
          restaurantAddress: data.address,
          restaurantImage: data.image,
          amount: (BigNumber.from(event.args[2]).toNumber() / 10 ** 6).toFixed(
            2
          ),
          eatCoinsMinted: (
            BigNumber.from(event.args[3]).toNumber() /
            10 ** 8
          ).toFixed(2),
        };
      });
      const history = Promise.all(list);
      setHistory(history);
    });
  };

  const getMarketItems = async () => {
    const marketItems = await contract.getMarketplaceItems();
    const items = marketItems.map(async (item) => {
      const price = ethers.utils.formatUnits(item.price.toString(), "ether");
      //console.log(item);
      const plate = await contract.idToEatPlate(item.tokenId);
      const image = getImage(plate.category, plate.level);
      const category = getCategory(plate.category);

      return {
        id: item.id.toNumber(),
        price: price,
        owner: item.owner,
        tokenId: item.tokenId.toNumber(),
        level: plate.level,
        category: category,
        durability: plate.durablity.toNumber(),
        efficiency: plate.efficiency.toNumber(),
        fortune: plate.fortune.toNumber(),
        img: image,
        active: item.active,
        //img, max
      };
    });
    const finalItems = await Promise.all(items);
    const filteredPlates = finalItems.filter((item) => item.active == true);
    setPlates(filteredPlates);
  };

  const getMyPlate = async () => {
    const plate = await contract.getPlatesOfOwner(address);

    if (BigNumber.from(plate.id).eq(BigNumber.from(0))) {
      sethasNft(false);
    } else {
      const image = getImage(plate.category, plate.level);
      const category = getCategory(plate.category);
      const costPerShiny = (plate.level * 12) / plate.durablity.toNumber() ** 2;
      const shinyCost = (100 - plate.durablity.toNumber()) * costPerShiny;
      console.log(shinyCost);
      setApiPointsData({
        id: plate.id.toNumber(),
        level: plate.level,
        category: category,
        durability: plate.durablity.toNumber(),
        efficiency: plate.efficiency.toNumber(),
        fortune: plate.fortune.toNumber(),
        img: image,
        shiny: plate.shiny.toNumber(),
        shinyCost: shinyCost,
        //img, max
      });
      setPointsData({
        durability: plate.durablity.toNumber(),
        efficiency: plate.efficiency.toNumber(),
        fortune: plate.fortune.toNumber(),
      });
      sethasNft(true);
    }
  };

  const clean = async () => {
    try {
      const tx = await contract.clean(apiPointsData.id);
      await toast.promise(tx.wait(), {
        pending: "Cleaning Plate 🧼",
        success: "Cleaning Successful 👌",
        error: "Bad cleaning",
      });
      await getMyPlate();
    } catch (e) {
      toast.error(e.error.data.message.replaceAll("execution reverted: ", ""));
    }
  };

  const eat = async () => {
    try {
      console.log(
        apiPointsData.id,
        qrData.id,
        qrData.signature,
        qrData.nonce,
        qrData.message
      );
      const tx = await contract.eat(
        apiPointsData.id,
        qrData.id,
        qrData.signature,
        qrData.nonce,
        qrData.message,
        BigNumber.from(parseFloat(qrData.amountInUsd) * 10 ** 6)
      );

      //1085fe8c0826061159c156984748f0f8b2118e110fb20f1b859dbc2a29005f0e

      /*       event EatFinished(
        uint256 plateId,
        uint256 restaurantId,
        uint256 amount,
        uint256 eatCoinsMinted
    ); */
      await toast.promise(tx.wait(), {
        pending: "Eating on Plate 🍽️...",
        success: "Eating Successful 👌",
        error: "Bad eating",
      });

      const filter = {
        address: config.contractAddress,
        topics: [
          utils.id("EatFinished(uint256,uint256,uint256,uint256)"),
          utils.hexZeroPad(utils.hexlify(apiPointsData.id), 32),
        ],
      };

      contract.once(
        filter,
        async (plateId, restaurantId, amount, eatCoinsMinted) => {
          toast.success(
            `You got ${(
              BigNumber.from(eatCoinsMinted).toNumber() /
              10 ** 8
            ).toFixed(2)} Eatcoins from eating 👌`
          );
          setPaymentSuccessModal(true);
          await getMyPlate();
          setPaymentSuccess({
            plateId: plateId.toNumber(),
            restaurantId: restaurantId.toNumber(),
            amount: (BigNumber.from(amount).toNumber() / 10 ** 6).toFixed(2),
            eatCoinsMinted: (
              BigNumber.from(eatCoinsMinted).toNumber() /
              10 ** 8
            ).toFixed(2),
          });
        }
      );
    } catch (e) {
      toast.error(e.error.data.message.replaceAll("execution reverted: ", ""));
    }
  };

  const spinWheel = async () => {
    try {
      const tx = await contract.spinWheel(apiPointsData.id);

      await toast.promise(tx.wait(), {
        pending: "Spinning Wheel 🎡...",
        success: "Waiting for chainlink...",
        error: "Bad eating",
      });

      const filter = {
        address: config.contractAddress,
        topics: [
          utils.id("SpinFinished(uint256,uint256,uint256)"),
          utils.hexZeroPad(utils.hexlify(apiPointsData.id), 32),
        ],
      };

      contract.once(
        filter,
        async (plateId, restaurantId, amount, eatCoinsMinted) => {
          toast.success(
            `You got ${(
              BigNumber.from(eatCoinsMinted).toNumber() /
              10 ** 8
            ).toFixed(2)} Eatcoins from spinning 👌`
          );
          //todo setSpinwheel modal to false
          await getMyPlate();
        }
      );
    } catch (e) {
      toast.error(e.error.data.message.replaceAll("execution reverted: ", ""));
    }
  };

  const levelUp = async () => {
    try {
      const efficency = pointsData.efficiency - apiPointsData.efficiency;
      const durability = pointsData.durability - apiPointsData.durability;
      const fortune = pointsData.fortune - apiPointsData.fortune;
      const tx = await contract.levelUp(
        efficency,
        fortune,
        durability,
        apiPointsData.id
      );
      await toast.promise(tx.wait(), {
        pending: "Leveling Up",
        success: "Level Up Successful",
        error: "Error Leveling Up",
      });
      await getMyPlate();
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  const sellNft = async () => {
    try {
      const approved = await contract.isApprovedForAll(
        address,
        config.contractAddress
      );
      if (!approved) {
        const tx = await contract.setApprovalForAll(
          config.contractAddress,
          true
        );

        await toast.promise(tx.wait(), {
          pending: "Approving...",
          success: "Approval successful 👌",
          error: "Approval rejected 🤯",
        });
      }

      const tx = await contract.listPlate(
        apiPointsData.id,
        ethers.utils.parseEther(sellingPrice.toString())
      );

      await toast.promise(tx.wait(), {
        pending: "Listing Plate...",
        success: "Plate listing successful 👌",
        error: "Listing rejected 🤯",
      });

      await getMyPlate();
      await getMarketItems();
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (signer) {
      getMyPlate();

      contract.balanceOf(address, 0).then((balance) => {
        setBalance(balance.div(10 ** 8).toNumber());
      });

      getMarketItems();
      getHistory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer]);

  const increment = (value) => {
    if (totalPoints > 0) {
      if (value === 0) {
        let efficiency = pointsData.efficiency;
        let points = totalPoints;
        setPointsData({ ...pointsData, efficiency: ++efficiency });
        setTotalPoints(--points);
      } else if (value === 1) {
        let fortune = pointsData.fortune;
        let points = totalPoints;
        setPointsData({ ...pointsData, fortune: ++fortune });
        setTotalPoints(--points);
      } else {
        let durability = pointsData.durability;
        let points = totalPoints;
        setPointsData({ ...pointsData, durability: ++durability });
        setTotalPoints(--points);
      }
    } else return;
  };

  const decrement = (value) => {
    if (totalPoints <= apiTotalPoints) {
      if (value === 0) {
        let efficiency = pointsData.efficiency;
        let points = totalPoints;
        if (efficiency <= apiPointsData.efficiency) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, efficiency: --efficiency });
        setTotalPoints(++points);
      } else if (value === 1) {
        let fortune = pointsData.fortune;
        let points = totalPoints;
        if (fortune <= apiPointsData.fortune) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, fortune: --fortune });
        setTotalPoints(++points);
      } else {
        let durability = pointsData.durability;
        let points = totalPoints;
        if (durability <= apiPointsData.durability) {
          //replace pointsData.efficiency with Api one
          return;
        }
        setPointsData({ ...pointsData, durability: --durability });
        setTotalPoints(++points);
      }
    } else return;
  };
  return isScanning ? (
    <div className="main bg-mainBg flex flex-col justify-start">
      {/* {isLoading && <p className="text-white text-xl3">Loading........</p>} */}
      <QrReader
        className="video"
        onError={() => {
          toast.info("Something went wrong");
          setIsScanning(false);
        }}
        onLoad={() => {
          if (!isLoading) {
            toast.success("Scan the reciept QR code");
            setIsLoading(true);
          }
        }}
        onScan={(data) => {
          if (data != null) {
            console.log(data);
            setIsScanning(false);
            const qrJson = JSON.parse(data.text);
            setQrData(qrJson);
            setPaymentConfirmModal(true);
          }
        }}
      />
    </div>
  ) : (
    <div className="main flex flex-col justify-start items-center bg-mainBg overflow-hidden">
      {/* Modal for Level Up */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={levelUpModal}
        onRequestClose={() => setLevelUpModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl flex flex-row">
            Level Up{" "}
            <Image
              alt="Level Up"
              src={LevelUp}
              width="30"
              height="15"
              className="ml-4"
            ></Image>
          </span>
          <div className="mx-6 mt-4">
            <Image
              alt="sample nft"
              src={apiPointsData.img}
              width="150"
              height="150"
            ></Image>
          </div>
          <span className="font-semibold text-2xl italic mt-4">
            Level {apiPointsData.level} to {apiPointsData.level + 1}
          </span>
          <div className="h-auto w-full flex flex-col justify-start">
            {apiPointsData.level != 4 ? (
              <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full flex flex-row justify-between items-baseline mb-4 mt-4 px-4">
                  <span className="font-semibold text-xl italic  flex flex-row items-end">
                    Cost:{" "}
                    <span className="font-semibold text-xl not-italic ml-2">
                      {apiPointsData.level == 1
                        ? 100
                        : apiPointsData.level == 2
                        ? 180
                        : 350}
                    </span>
                    <Image
                      alt="Eat Coin"
                      src={EatCoin}
                      width="30"
                      height="30"
                      className="ml-2"
                    ></Image>
                  </span>
                  <span className="font-semibold text-xl italic  flex flex-row items-end">
                    Bal:{" "}
                    <span className="font-semibold text-xl not-italic ml-2">
                      {balance}
                    </span>
                    <Image
                      alt="Eat Coin"
                      src={EatCoin}
                      width="30"
                      height="30"
                      className="ml-2"
                    ></Image>
                  </span>
                </div>
                {/* If Current Balance is lower than Cost */}
                {(apiPointsData.level == 1
                  ? 100
                  : apiPointsData.level == 2
                  ? 180
                  : 350) > balance && (
                  <span className="font-medium text-base italic text-center">
                    Current Balance is lower than Level Up cost
                  </span>
                )}
                {/* If Current Balance is lower than Cost */}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <span className="font-medium text-base text-center italic mt-4">
                  You are already at your Highest Level
                </span>
                <span className="font-medium text-2xl text-center italic mt-1 mb-4">
                  {"You can't Level Up"}
                </span>
              </div>
            )}
          </div>

          <div className="w-full flex flex-row justify-between items-center px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setLevelUpModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg={`${
                (apiPointsData.level == 1
                  ? 100
                  : apiPointsData.level == 2
                  ? 180
                  : 350) > balance || apiPointsData.level == 4
                  ? "bg-disabled"
                  : "bg-mainBg/90"
              }`}
              title="CONFIRM"
              action={() => {
                setAddPointsModal(true);
                setLevelUpModal(false);
              }}
              disabled={
                (apiPointsData.level == 1
                  ? 100
                  : apiPointsData.level == 2
                  ? 180
                  : 350) > balance || apiPointsData.level == 4
              }
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Level Up */}

      {/* Modal for Adding Points */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={addPointsModal}
        onRequestClose={() => setAddPointsModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-bold text-3xl">Add Points</span>
          <div className="w-full flex flex-row justify-start items-baseline mt-4 ml-6">
            <span className="font-semibold text-xl italic mt-4">
              Available Points:
            </span>
            <span className="font-semibold text-2xl italic ml-4">
              {totalPoints}
            </span>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-6 px-4">
            <span className="font-semibold text-lg italic mt-4">
              Efficiency
            </span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(0);
                }}
              ></div>
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
                {pointsData.efficiency}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(0);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-3 px-4">
            <span className="font-semibold text-lg italic">Fortune</span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(1);
                }}
              ></div>
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
                {pointsData.fortune}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(1);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-baseline mt-3 px-4">
            <span className="font-semibold text-lg italic">Durability</span>
            <div className="flex flex-row justify-center items-center">
              <div
                className="w-4 h-4 bg-bgRed border-[2px]"
                onClick={() => {
                  decrement(2);
                }}
              ></div>
              <span className="font-semibold text-2xl italic w-10 flex flex-row justify-center mx-2">
                {pointsData.durability}
              </span>
              <div
                className="w-4 h-4 bg-bgGreen border-[2px]"
                onClick={() => {
                  increment(2);
                }}
              ></div>
            </div>
          </div>
          <div className="w-full bottom-0 flex flex-row justify-between items-center mt-[11vh] px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => setAddPointsModal(false)}
            ></Button>

            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-mainBg/90"
              title="CONFIRM"
              action={async () => {
                setAddPointsModal(false);
                await levelUp();
              }}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Adding Points */}

      {/* Modal for Selling NFT */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={sellNftModal}
        onRequestClose={() => setSellNftModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[20%] flex flex-col justify-start items-center p-4 z-[20]">
          <span className="font-bold text-3xl">Sell NFT </span>
          <div className="mx-6 mt-4">
            <Image
              alt="sample nft"
              src={apiPointsData.img}
              width="200"
              height="200"
            ></Image>
          </div>
          <div className="w-[70%] flex flex-row justify-around items-center mt-4">
            <span className="font-semibold text-2xl italic">
              {apiPointsData.category}
            </span>
            <span className="font-semibold text-2xl italic">
              Level {apiPointsData.level}
            </span>
          </div>
          <div className="w-[95%] h-[14vh] flex flex-col justify-start items-center pt-2 mb-3">
            {apiPointsData.shiny < 100 ? (
              <span className="font-bold text-xl text-center mt-4">
                Your Shiny should be 100% to list your NFT for sale
              </span>
            ) : (
              <div className="w-full flex flex-col justify-center items-center mt-2">
                {" "}
                <span className="w-[85%] flex flex-row justify-start items-center font-medium text-lg">
                  Your Price
                </span>
                <div className="w-[85%] h-[3rem] bg-bg1 rounded-xl mt-2 border-[2px] flex flex-row justify-center items-center">
                  <input
                    className="w-[85%] h-full p-2 text-text1 font-semibold text-2xl"
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                    type="number"
                    onChange={(e) => {
                      setSellingPrice(e.target.value);
                    }}
                  ></input>
                  <Image
                    alt="Matic Logo"
                    src={Matic}
                    width="30"
                    height="30"
                  ></Image>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-row justify-between items-center px-2">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setSellNftModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg={`${
                apiPointsData.shiny < 100 ? "bg-disabled" : "bg-mainBg/90"
              }`}
              title="CONFIRM"
              action={async () => {
                setSellNftModal(false);
                await sellNft();
              }}
              disabled={apiPointsData.shiny > 100}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Selling NFT */}

      {/* Modal for Category */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={categoryModal}
        onRequestClose={() => setCategoryModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Categories</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-emerald flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Emerald");
                setCategoryModal(false);
              }}
            >
              Emerald
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-gold flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Gold");
                setCategoryModal(false);
              }}
            >
              Gold
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-silver flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Silver");
                setCategoryModal(false);
              }}
            >
              Silver
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bronze flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text2 mb-4"
              onClick={() => {
                setChooseCategory("Bronze");
                setCategoryModal(false);
              }}
            >
              Bronze
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Category */}

      {/* Modal for Level */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={levelModal}
        onRequestClose={() => setLevelModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Levels</span>
          <div className="w-[90%] flex flex-col justify-center items-center mt-6">
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(1);
                setLevelModal(false);
              }}
            >
              Level 1
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(2);
                setLevelModal(false);
              }}
            >
              Level 2
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(3);
                setLevelModal(false);
              }}
            >
              Level 3
            </div>
            <div
              className="w-full h-[3rem] rounded-xl bg-bg1 flex flex-row border-[3px] border-text2 justify-center items-center text-lg font-bold text-text1 mb-4"
              onClick={() => {
                setChooseLevel(4);
                setLevelModal(false);
              }}
            >
              Level 4
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Level */}

      {/* Modal for Payment Confirmation */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={paymentConfirmModal}
        onRequestClose={() => setPaymentConfirmModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Confirm Payment</span>
          <span className="font-medium text-xl mt-4">{qrData.name}</span>
          <div className="w-[85%] h-auto py-4 px-2 bg-bg1 rounded-xl mt-2 border-[2px] border-text2 text-text1 flex flex-col justify-start items-start">
            <span>{qrData.description}</span>
          </div>
          <div className="w-[90%] flex flex-row justify-between items-start mt-4">
            <div className="flex flex-col justify-center items-start">
              <span className="font-medium text-lg">Total Charge</span>
              <div className="w-full flex flex-col justify-start items-start mt-2">
                <span className="font-bold text-xl">
                  <span className="ml-2">$</span>{" "}
                  <span className="ml-3">{qrData.amountInUsd}</span>
                </span>
                <span className="font-bold text-xl flex flex-row justify-center items-center mt-2">
                  <Image
                    alt="Matic Logo"
                    src={Matic}
                    width="30"
                    height="30"
                  ></Image>
                  <span className="ml-2">{30}</span>
                  {
                    // todo : change the amount of matic from price
                  }
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              <span className="font-medium text-lg">Approx. EAT</span>
              <div className="w-full flex flex-col justify-start items-end   mt-2">
                <span className="font-bold text-xl flex flex-row justify-center items-center mt-2">
                  <Image
                    alt="Eat Coin Logo"
                    src={EatCoin}
                    width="30"
                    height="30"
                  ></Image>
                  {/* <span className="mx-2">+</span> */}
                  <span className="ml-2">+{8}</span>{" "}
                  {
                    //todo add good approximation
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center px-2 mt-6">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setPaymentConfirmModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-mainBg/90"
              title="CONFIRM"
              action={async () => {
                await eat();
              }}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Payment Confirmation */}

      {/* Modal for Payment Successful */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={paymentSuccessModal}
        onRequestClose={() => setPaymentSuccessModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10] paymentSuccess">
          <span className="font-bold text-3xl">Payment Successful</span>
          <div className="w-[70%] flex flex-row justify-between items-center mt-6">
            <span className="font-bold text-[2rem] flex flex-row justify-center items-center">
              <span className="ml-2">$</span>{" "}
              <span className="ml-3">{paymentSuccess.amount}</span>
            </span>
            <span className="font-bold text-[2rem] flex flex-row justify-center items-center">
              <Image
                alt="Matic Logo"
                src={Matic}
                width="30"
                height="30"
              ></Image>
              <span className="ml-2">{paymentSuccess.eatCoinsMinted}</span>
            </span>
          </div>
          <span className="font-bold text-xl mt-4">You Got</span>
          <span className="font-bold text-[2rem] flex flex-row justify-center items-center mt-4">
            <span>{30}</span>
            <Image
              alt="Matic Logo"
              src={EatCoin}
              width="30"
              height="30"
              className="ml-2"
            ></Image>
          </span>
          <div className="w-full flex flex-row justify-between items-center px-2 mt-6">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setPaymentSuccessModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg={`${"bg-mainBg/90"}`}
              title="CONFIRM"
              action={async () => {
                //await eat();
              }}
              /* disabled={apiPointsData.shiny > 100} */
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Payment Successful */}

      {/* Modal for Payment Cleaning */}
      <ReactModal
        className="bg-none flex flex-col justify-center items-center outline-none"
        isOpen={cleanModal}
        onRequestClose={() => setCleanModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(21, 96, 96, 0.2)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="h-auto w-[90%] bg-bg2/80 rounded-[2rem] border-[3px] mx-6 mt-[40%] flex flex-col justify-start items-center p-4 z-[10]">
          <span className="font-bold text-3xl">Clean Plate</span>
          <div className="w-[70%] flex flex-row justify-center items-center mt-6">
            <span className="font-bold text-[1.5rem]">Cost</span>
            <span className="font-bold text-[1.5rem] mx-4">{40}</span>
            <Image
                alt="Eat Coin Logo"
                src={EatCoin}
                width="30"
                height="30"
              ></Image>
          </div>
          <span className="font-bold text-lg mt-4 text-center">Cleaning will make your Shiny 100%</span>
          <div className="w-full flex flex-row justify-between items-center px-2 mt-6">
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg="bg-none"
              title="CANCEL"
              action={() => {
                setCleanModal(false);
              }}
            ></Button>
            <Button
              width="w-[46%]"
              height="h-[3rem]"
              bg={`${currShiny < 100 ? "bg-disabled" : "bg-mainBg/90"}`}
              title="CONFIRM"
              action={() => {}}
              disabled={currShiny > 100}
            ></Button>
          </div>
        </div>
      </ReactModal>
      {/* Modal for Payment Cleaning */}


      <Navbar setNavStatus={setNavStatus}></Navbar>
      {navStatus.home ? (
        <div className="w-full px-6 mt-[12vh] mb-[10vh] flex flex-col justify-center items-center">
          {hasNft ? (
            <>
              <div className="mx-6">
                <Image
                  alt="sample nft"
                  src={apiPointsData.img}
                  width="200"
                  height="200"
                ></Image>
              </div>
              <div className="w-full flex flex-row justify-around items-end mt-10">
                <CurvedButton
                  width="w-[8rem]"
                  height="h-[3rem]"
                  bg="bg-bg2"
                  textSize="text-xl"
                  title={apiPointsData.category}
                ></CurvedButton>
                <CurvedButton
                  width="w-[8rem]"
                  height="h-[3rem]"
                  bg="bg-bg2"
                  textSize="text-xl"
                  title={`Level ${apiPointsData.level}`}
                ></CurvedButton>
              </div>
              <div className="w-full flex flex-row justify-center items-center mt-10">
                <ProgressButton
                  width="w-full"
                  height="h-[5rem]"
                  title="Shiny"
                  max={100}
                  progress={apiPointsData.shiny}
                  // progress="w-[100%]"
                  title2={apiPointsData.shiny}
                  action={()=>{setCleanModal(true)}}
                ></ProgressButton>
              </div>
              <NftAtrributes apiPointsData={apiPointsData}></NftAtrributes>
            </>
          ) : (
            <div className="w-full h-[50vh] mt-[12vh] flex flex-col justify-center items-center">
              <span className="font-semibold text-lg text-text1 italic text-center">
                You do not own any EAT PLATE
              </span>
              <span className="font-bold text-xl text-text1 italic text-center mt-2 mb-8">
                Buy one from the marketplace
              </span>
              <CurvedButton
                width="w-[12rem]"
                height="h-[3rem]"
                bg="bg-bg2"
                textSize="text-xl"
                title="Market Place"
                action={() => {
                  setNavStatus({
                    home: false,
                    marketPlace: true,
                    history: false,
                  });
                }}
              ></CurvedButton>
            </div>
          )}
        </div>
      ) : navStatus.marketPlace ? (
        <div className="fixed w-full flex flex-col justify-start items-center h-[100vh] mt-[9vh] py-4 px-2 overflow-hidden">
          <span className="text-text1 text-2xl font-bold">Market Place</span>
          <div className=" w-[80%] flex flex-row justify-between items-center mt-4">
            <CurvedButton
              width="w-[8rem]"
              height="h-[3rem]"
              bg={`${
                chooseCategory == "Emerald"
                  ? "bg-emerald"
                  : chooseCategory == "Gold"
                  ? "bg-gold"
                  : chooseCategory == "Silver"
                  ? "bg-silver"
                  : chooseCategory == "Bronze"
                  ? "bg-bronze"
                  : "bg-bg2"
              }`}
              textSize="text-xl"
              title={chooseCategory}
              action={() => {
                setCategoryModal(true);
              }}
            ></CurvedButton>
            <CurvedButton
              width="w-[8rem]"
              height="h-[3rem]"
              bg="bg-bg2"
              textSize="text-xl"
              title={`Level ${chooseLevel}`}
              action={() => {
                setLevelModal(true);
              }}
            ></CurvedButton>
          </div>
          <div className="w-full h-auto grid grid-cols-2 gap-4 mt-8 overflow-scroll px-2">
            {plates.map((nftPlate) => (
              <div
                key={nftPlate}
                onClick={async () => {
                  await buyPlate(nftPlate);
                }}
                className={`${
                  plates[plates.length - 1].tokenId == nftPlate.tokenId &&
                  "mb-[15rem]"
                }`}
              >
                <NftPlateMP nftPlate={nftPlate}></NftPlateMP>
              </div>
            ))}
          </div>
        </div>
      ) : navStatus.history ? (
        <div className="fixed w-full flex flex-col justify-start items-center h-[100vh] mt-[9vh] py-4 px-2 overflow-hidden">
          <div className="w-[90%] h-[75%] flex flex-col justify-start items-center">
            <span className="text-text1 text-2xl font-bold">History</span>
            {/* If History is Empty */}
            {/* <span className="text-text1 text-xl font-semibold italic mt-10">You do not have history</span> */}
            {/* If History is Empty */}
            <div className="w-full h-full flex flex-col justify-start items-center mt-8">
              {history.map((historyDetail) => (
                <HistoryDetails
                  key={historyDetail.restaurantId}
                  historyDetail={historyDetail}
                ></HistoryDetails>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Footer
        setLevelUpModal={setLevelUpModal}
        setNavStatus={setNavStatus}
        setSellNftModal={setSellNftModal}
        setIsScanning={setIsScanning}
      ></Footer>
    </div>
  );
};

export default HomePage;
