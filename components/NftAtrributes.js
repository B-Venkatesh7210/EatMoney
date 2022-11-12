import React from 'react'
import LevelButton from './LevelButton'

const NftAtrributes = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start mt-6">
          <span className="font-semibold text-xl italic">
            Attributes
          </span>
          <div className="w-full flex flex-row justify-between items-center mt-3">
            <div className="flex flex-row justify-start items-center">
              <span className="font-medium text-base italic">
                Effficiency
              </span>
            </div>
            <div className="w-1/2 flex flex-row justify-start items-center">
              <LevelButton width="w-full" height="h-[2rem]" progress="w-[50%]" title="Points"></LevelButton>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-3">
            <div className="flex flex-row justify-start items-center">
              <span className="font-medium text-base italic">
                Fortune
              </span>
            </div>
            <div className="w-1/2 flex flex-row justify-start items-center">
              <LevelButton width="w-full" height="h-[2rem]" progress="w-[60%]" title="Points"></LevelButton>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-3">
            <div className="flex flex-row justify-start items-center">
              <span className="font-medium text-base italic">
                Durability
              </span>
            </div>
            <div className="w-1/2 flex flex-row justify-start items-center">
              <LevelButton width="w-full" height="h-[2rem]" progress="w-[80%]" title="Points"></LevelButton>
            </div>
          </div>
        </div>
  )
}

export default NftAtrributes