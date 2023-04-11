import React from "react";
import { useGetPaintingsQuery } from "../app/store/query";
import SinglePainting from "./components/SinglePainting";
import { BottomFade, Container, InnerContainer, TopFade } from "./Store.styles";

export const Store = () => {
  const { data } = useGetPaintingsQuery();

  return (
    <Container>
      <TopFade />
      <InnerContainer>
        {data &&
          data.map((p) => (
            <SinglePainting
              key={p.id}
              id={p.id}
              image={
                p.better_featured_image.media_details.sizes.large.source_url
              }
              title={p.acf.name}
              technique={p.acf.techinque}
              year={p.acf.year}
              size={p.acf.size}
              description={p.acf.description}
              price={p.acf.price}
            />
          ))}
      </InnerContainer>
      <BottomFade />
    </Container>
  );
};
