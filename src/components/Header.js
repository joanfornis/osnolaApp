import HeaderStyle from './Header.module.scss'

export default function Header() {
  return (
    <>
      <header className="bg-primary text-white">
        <p className={HeaderStyle.paragraph}>Header working <b>OK</b>👌</p>
      </header>
    </>
  );
}
