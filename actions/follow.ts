"use server";

export const onFollow = async (id: string) => {
  try {
    console.log("Same as API call", id);
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
