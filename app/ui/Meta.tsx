import { Metadata } from 'next';

interface IMetaProps extends Metadata {}

const Meta = (props: IMetaProps) => {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`${props.title} | Snaxd App`}</title>
      <meta name="description" content={`${props.description}`} />
      <meta name="keywords" content={`${props.keywords}`} />
      <meta></meta>
    </head>
  );
};

export default Meta;
