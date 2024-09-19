import { FC } from 'react';

interface HeaderProps {
  title: string;
  author: string;
  date: string;
}

const Header: FC<HeaderProps> = ({ title, author, date }) => {
  return (
    <section className="w-full flex flex-col items-center sm:mt-8 pt-6 gap-10 md:w-2/3 2xl:w-1/2">
      <h1 className="text-center xl:w-5/6 mb-2">{title}</h1>

      <div className="flex flex-col gap-1 w-full">
        <p className="txt-rg text-text/80 mx-5 md:mx-0">
          <span className="manrope-semibold">Author:</span> {author}
        </p>
        <p className="txt-rg text-text/80 mx-5 md:mx-0">
          <span className="manrope-semibold">Date:</span> {date}
        </p>
      </div>
    </section>
  );
};

export default Header;
