import React, { Suspense, use } from "react";
import Books from "@/../public/product.json";

interface BookType {
  title: string;
  genre: string;
  description: string;
}

const GetBooks = async () => {
  await new Promise((r) => setTimeout(r, 1500));
  return {
    books: Books.Books,
  };
};

const BookList = () => {
  const books = use(GetBooks());
  return (
    <div>
      {books.books?.map((book: BookType, index: number) => (
        <div key={index} className="mb-[15px]">
          <h3 className="capitalize">{book.title}</h3>
          <p>
            <strong className="mr-[20px] uppercase italic ">{book.genre}</strong>{" "}
            {book.description}
          </p>
        </div>
      ))}
    </div>
  );
};

function page() {
  return (
      <div>
        <div className="flex flex-col justify-center items-center h-[50px] p-3 mb-5">
          <h1 className="mt-[10px] font-bold text-2xl ">Books</h1>
        </div>
        <div className="flex flex-col w-screen justify-center items-center">
          <Suspense fallback={<p>loading books ............ </p>}>
            <BookList />
          </Suspense>
        </div>
      </div>
    
  );
}

export default page;
