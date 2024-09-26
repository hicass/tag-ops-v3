import { FC } from 'react';

import moment from 'moment';

interface HeaderProps {
  title: string;
  author: string;
  publishedAt: string;
}

const Header: FC<HeaderProps> = ({ title, author, publishedAt }) => {
  const formattedDate = moment(publishedAt).format('MMMM Do, YYYY');

  return (
    <section className="w-full flex flex-col items-center sm:mt-8 pt-6 gap-10 md:w-2/3 2xl:w-1/2">
      <h1 className="text-center xl:w-5/6 mb-2">{title}</h1>

      <div className="flex flex-col gap-1 w-full">
        <p className="txt-rg text-text/80 mx-5 md:mx-0">
          <span className="manrope-semibold text-text">Author:</span> {author}
        </p>
        <p className="txt-rg text-text/80 mx-5 md:mx-0">
          <span className="manrope-semibold text-text">Date:</span>{' '}
          {formattedDate}
        </p>
      </div>
    </section>
  );
};

export default Header;
