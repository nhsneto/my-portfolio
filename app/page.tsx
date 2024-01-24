import { DarkMode, Email, GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.socialIcons}>
          <li>
            <Email />
          </li>
          <li>
            <GitHub />
          </li>
          <li>
            <LinkedIn />
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </header>

      <main className={styles.main}>
        <div className={styles.description}>
          <section>
            <h2>Nelson Neto</h2>
            <p>Desenvolvedor</p>
            <p>
              Olá, meu nome é Nelson, sou apaixonado por desenvolvimento de
              software. Atualmente, curso Análise e Desenvolvimento de Sistemas
              no Insituto Federal de Pernambuco (IFPE). Tenho interesse em
              desenvolvimento WEB e Mobile.
            </p>
          </section>

          <section>
            <h2>Habilidades</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>JUnit</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </section>
        </div>

        <div className={styles.verticalBar}></div>

        <section className={styles.projects}>
          <h2>Projetos</h2>
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
        <span>© 2024 nhsneto@github.io</span>
      </footer>
    </div>
  );
}
