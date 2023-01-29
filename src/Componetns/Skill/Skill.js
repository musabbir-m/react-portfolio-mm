import React from "react";
import { ImStack } from "react-icons/im";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

const Skill = () => {
  return (
    <div className=" border-t-2 border-gray-200  flex items-center content-center flex-col pt-5 pb-8 mt-6">
      <div>
        <ImStack className=" w-40 h-8"></ImStack>
      </div>

      <h2 className="text-3xl font-bold">SKILLS AND TECHNOLOGIES</h2>
      <hr className="w-24 h-1 mx-auto my-5  bg-yellow-400 border-0 rounded md:mt-5 md:mb-10 dark:bg-gray-700" />
      <p className="mb-8 md:mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, in!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-auto">
        {/* <p><AiFillHtml5></AiFillHtml5> HTML</p>
                <p><DiCss3></DiCss3> CSS</p> */}

        <div className="w-full py-2 rounded-lg font- px-2 flex bg-gray-200 shadow-sm">
          <div className=" w-8">
            <img className="rounded-full" src="html.png" alt="" />
          </div>
          <p className="text-xl font-semibold ml-2">HTML</p>
        </div>

        <div className=" py-2 rounded-lg font-semibold px-2 flex bg-gray-200 shadow-sm">
          <div className=" w-8">
            <img className="rounded-full" src="css.png" alt="" />
          </div>
          <p className="text-xl font-semibold ml-2">CSS</p>
        </div>

        <div className="w-full py-2 rounded-lg font-semibold px-2 flex bg-gray-200 shadow-sm">
          <div className=" w-8">
            <img className="rounded-full" src="js.png" alt="" />
          </div>
          <p className="text-xl font-semibold ml-2">JavaScript</p>
        </div>

        <div className="w-full py-2  font- rounded-lg px-2 flex bg-gray-200 shadow-sm">
          <div className=" w-8">
            <img className="rounded-full" src="react.png" alt="" />
          </div>
          <p className="text-xl font-semibold ml-2">React</p>
        </div>

        <div className="w-full py-2 rounded-lg font- px-2 flex bg-gray-200 shadow-sm">
          <div className=" w-8">
            <img className="rounded-full" src="node.png" alt="" />
          </div>
          <p className="text-xl font-semibold ml-2">Node</p>
        </div>

        {/* <p>JavaScript</p>
                <p>React</p>
                <p>Node</p>
                <p>MongoDB</p> */}
      </div>
    </div>
  );
};

export default Skill;
