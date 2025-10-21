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

async function page({ params }: { params: { id: string } }) {
  const id = await params.id;

  const BookList = () => {
    const books = use(GetBooks());
    const details = books.books?.filter((book: BookType) => book.id === id)
    return <div>
        {
           <div className="mb-[15px]">    
               <h3 className="capitalize mb-3 underline underline-offset-2">
                    {details[0].title}
               </h3>
               <p>
                  <strong className="mr-[20px] uppercase italic bg-amber-600 p-2">
                     {details[0].genre}
                  </strong>
                     {details[0].description}
               </p>
            </div>
        }
        </div>;
  };

  return (
     <div>
          <div className="flex flex-col justify-center items-center h-[50px] p-3 mb-5">
            <h1 className="mt-[20px] font-bold text-2xl bg-amber-600 p-2 rounded-xl">
              Book Details
            </h1>
          </div>
          <div className="flex flex-col w-screen justify-center items-center">
            <Suspense
              fallback={
                <p className="text-amber-600 text-xl">
                  Loading book details ................
                </p>
              }
            >
              <BookList />
            </Suspense>
          </div>
          <div className="flex justify-center items-center mt-[200px]">
            <Link href={`/`}>
             <p>Back</p>
            </Link>
          </div>
        </div>
  )
}

export default page;
