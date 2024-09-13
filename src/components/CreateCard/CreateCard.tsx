import React, { useState } from "react";
import { ICard } from "../../types/models";
import { cards } from "../../data/cards";
import "./CreateCard.scss"

interface CreateCardProps {
  onCreate: (card: ICard) => void;
}

const CreateCard = ({ onCreate }: CreateCardProps) => {
  const today = new Date();

  const [data, setData] = useState<ICard>({
    id: ++cards.length,
    order: 1,
    title: "",
    description: "",
    city: "",
    year: today.getFullYear(), // сделать через библиотеку Date
    image: "",
  });

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate(data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const changeAreaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="sides flex flex-row items-center transition-all overflow-hidden">
      <div className="mdl-title flex flex-col w-[24vw] mr-[8vw] transition-all ">
        <h1 className=" lng-creatingUnit text-4xl mb-[2vh] text-center transition-all select-none">
          Creating a new card
        </h1>
        <div className="w-[100%] h-[100%] transition-all">
          <div className="self-center select-none static-cards" />
        </div>
      </div>

      <form
        action=""
        onSubmit={submitHandler}
        method="POST"
        className="form flex flex-col w-[24vw] transition-all"
      >
        <h2 className="lng-creatingTitle mb-1 pl-1 font-bold tracking-wider">
          Card title
        </h2>
        <input
          type="text"
          name="title"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.title}
          onChange={changeHandler}
          minLength={2}
          maxLength={30}
          required
        />

        <h2 className="lng-creatingUrl mb-1 pl-1 font-bold tracking-wider">
          Image link
        </h2>
        <input
          type="url"
          name="image"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.image}
          onChange={changeHandler}
          required
        />
        <h2 className="lng-creatingDescription mb-1 pl-1 font-bold tracking-wider">
          Description
        </h2>
        <textarea
          name="description"
          className="border-solid border-2 h-[12vh] border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{
            backgroundColor: "transparent",
            borderRadius: "8px",
            resize: "vertical",
            minHeight: "100px",
            maxHeight: "250px",
          }}
          value={data.description}
          onChange={changeAreaHandler}
          maxLength={500}
        />
        <h2 className="lng-creatingPlace mb-1 pl-1 font-bold tracking-wider">
          Place
        </h2>
        <input
          type="text"
          name="city"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.city}
          onChange={changeHandler}
          minLength={2}
          maxLength={16}
          required
        />
        <h2 className="lng-creatingYear mb-1 pl-1 font-bold tracking-wider">
          Year
        </h2>
        <input
          type="number"
          name="year"
          min="1900"
          max={today.getFullYear()}
          step="1"
          className="border-solid border-2 border-gray-600 py-2 px-3 mb-4 focus:border-gray-400 transition-all"
          style={{ backgroundColor: "transparent", borderRadius: "8px" }}
          value={data.year}
          onChange={changeHandler}
          required
        />

        <button
          type="submit"
          value="create"
          className="lng-creatingBtn font-bold mt-4 py-2 px-3 rounded-lg bg-emerald-500 w-[45%] self-center text-gray-100 hover:w-[100%] transition-all delay-200 duration-300 ease-out text-black"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCard;
