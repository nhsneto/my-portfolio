import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { League_Spartan } from "next/font/google";
import styles from "./page.module.scss";
import LanguageDropDownMenu from "./components/LanguageDropDownMenu";
import ModeToggle from "./components/ModeToggle";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.socialIcons}>
          <li>
            <a href="mailto:nhsneto@gmail.com" title="Email">
              <Email />
            </a>
          </li>
          <li>
            <a href="https://github.com/nhsneto" target="_blank" title="GitHub">
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/nhsneto"
              target="_blank"
              title="LinkedIn"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </header>

      <main className={styles.main}>
        <div className={styles.description}>
          <section className={styles.about}>
            <div className={styles.title}>
              <h2 className={leagueSpartan.className}>Nelson Neto</h2>
              <p className={leagueSpartan.className}>Desenvolvedor</p>
            </div>
            <p>
              Olá, meu nome é Nelson, sou apaixonado por desenvolvimento de
              software. Atualmente, estou cursando o último ano de Análise e
              Desenvolvimento de Sistemas no Insituto Federal de Pernambuco
              (IFPE). Tenho interesse em desenvolvimento <strong>WEB</strong> e{" "}
              <strong>Mobile</strong>.
            </p>
          </section>

          <section className={styles.skills}>
            <h2 className={leagueSpartan.className}>Habilidades</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>JUnit</li>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </section>
        </div>

        <div className={styles.verticalBar}></div>

        <section className={styles.projects}>
          <h2 className={leagueSpartan.className}>Projetos</h2>
          <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            <li>Projeto 4</li>
            <li>Projeto 5</li>
            <li>Projeto 6</li>
            <li>Projeto 7</li>
            <li>Projeto 8</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={leagueSpartan.className}>
          © 2024 nhsneto.github.io
        </span>
        <LanguageDropDownMenu />
      </footer>
    </div>
  );
}
