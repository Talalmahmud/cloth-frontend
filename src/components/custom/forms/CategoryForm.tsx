import React, { useState } from "react";

interface CategoryProps {
  name: string;
  description: string;
}

type Props = {
  id?: string;
};

const CategoryForm = ({ id }: Props) => {
  const [category, setCategory] = useState<CategoryProps>({
    name: "",
    description: "",
  });
  return (
    <div className=" flex flex-col bg-white gap-4 items-center justify-center w-[400px]">
      {id ? <p>Update Category</p> : <p>Add Category</p>}

      <div className=" flex flex-col gap-2">
        <div className=" flex flex-col gap-2">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            value={category?.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            value={category?.description}
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
          />
        </div>

        <div className=" flex gap-2">
          <button className=" text-[14px]s">Cancel</button>{" "}
          <button>{id ? "Add" : "Update"}</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
