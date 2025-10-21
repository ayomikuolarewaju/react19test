import React, { Suspense, use } from "react";
import Books from "@/../public/product.json";
import Link from "next/link";

interface BookType {
  id: string;
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
          <Link href={`/details/${book.id}`}>
            <h3 className="capitalize mb-3 underline underline-offset-2">
              {book.title}
            </h3>
          </Link>
          <p>
            <strong className="mr-[20px] uppercase italic bg-amber-600 p-2">
              {book.genre}
            </strong>{" "}
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
        <h1 className="mt-[20px] font-bold text-2xl bg-amber-600 p-2 rounded-xl">
          Books
        </h1>
      </div>
      <div className="flex flex-col w-screen justify-center items-center">
        <Suspense
          fallback={
            <p className="text-amber-600 text-xl">
              Loading books ................
            </p>
          }
        >
          <BookList />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
