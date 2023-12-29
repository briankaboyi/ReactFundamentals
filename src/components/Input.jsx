

export default function Input({handleChange}) {
  
  return (
    <form action="">
      <input type="text" onChange={(e) => handleChange(e)} />
    </form>
  );
}
