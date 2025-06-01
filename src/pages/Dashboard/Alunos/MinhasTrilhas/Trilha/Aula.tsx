export default function Aula() {
  return (
    <>
      <div className="container-aula">
        <div className="container-lateral-aula">
          <div className="modulo-aula"></div>
          <div className="aulas"></div>
          <div className="quiz-aula"></div>
        </div>
        <div className="container-video-aula">
          <div className="titulo-aula"></div>
          <div className="video-aula">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sIjEzqbD2jg?si=sX2Cu-sRRQlPhYp7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="descricao-aula"></div>
          <div className="navegacao-aula"> </div>
        </div>
      </div>
    </>
  );
}
