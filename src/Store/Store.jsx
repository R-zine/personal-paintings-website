import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGetPaintingsQuery } from "../app/store/query";
import SinglePainting from "./components/SinglePainting";
import { Container, InnerContainer, Title, TopFade } from "./Store.styles";

export const Store = () => {
  const { data } = useGetPaintingsQuery();

  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, { opacity: 1, delay: 2 });
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      <Title>Store</Title>
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
      </Container>
    </div>
  );
};
