import React from 'react';
import { useState } from 'react';
import { Controller , useForm } from "react-hook-form";
import Creatable from "react-select/creatable"

const Tag = (
  props,
) => {
  const [tags, setTags] = useState([
    { value: "宿題", label: "宿題" },
    { value: "趣味", label: "趣味" },
    { value: "仕事", label: "仕事" },
  ]);
  const { control } = useForm({
    defaultValues: {
      value: "宿題", label: "宿題"
    },
  });

  const onAddTag = (value) => {
    const newTag = {
      value: value,
      label: value,
    };
    setTags([...tags, newTag]);
    setTags("");
  };

  return (
    <>
      {props.showFlag ? (
          <div className="tag-container">
            <Controller 
              name="value"
              control={control}
              render={({ field }) => (
                <Creatable
                  options={tags}
                  value={tags.find((x) => x.value === field.value)}
                  onChange={(newValue) => {
                    field.onChange(newValue?.value);
                  }}
                />
              )}
            />
            <button onClick={onAddTag}>作成</button>
          </div>
        ) : (
          <>
            閉じている
          </>
        )
      }
    </>
  );
};

export default Tag;
