import { useState } from "react";
import { Htag, Button, P, HashTags, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);


  return (
    <>
      <Htag tag='h1'>Title </Htag>
      <P> Text1 </P>
      <P fontSize="md"> Text2 </P>
      <P fontSize="lg"> Text3 </P>
      <HashTags size="sm"> Text3 </HashTags>
      <HashTags size="md" color="red"> Text3 </HashTags>
      <HashTags size="sm" color="green"> Text3 </HashTags>
      <HashTags size="md" color="primary"> Text3 </HashTags>
      <Button appearance='primary' arrow="right"> Click </Button>
      <Button appearance='ghost'> Click </Button>
      <Rating rating={rating} isEditable setRating={setRating}>  </Rating>
    </>
  );
}
