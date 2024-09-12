const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name} from {props.town}, you are {props.age} years old
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        greeting app created by <a href="">Juha Konttinen</a>
      </footer>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const nimi = "Heikka";
  const ika = 10;
  console.log(now, a + b);

  return (
    <>
      <section>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </section>
      <br />
      <section className="greetings">
        <h1>Greetings</h1>
        <p>Hello World!</p>
        <Hello name="Heikki" town="Helsinki" age="15" />
        <Hello name="Maija" town="Oulu" age={26 + 10} />
        <Hello name={nimi} town="Jyväskylä" age={ika} />
      </section>
      <Footer />
    </>
  );
};

export default App;
