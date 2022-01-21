import styles from "../styles/TreatedCases.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function TreatedCases() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <section className={styles.intro}>
        <img
          className={styles.introImg}
          alt="mili-img"
          src="/images/treated-cases-intro.jpg"
        />
        <div className={styles.overlay}>
          <div className="med">
            <h1 data-aos="flip-up" className={styles.title}>
              {t("treated_cases_title")}
            </h1>
            <br />
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className={styles.desc}
            >
              {t("treated_cases_subtitle")}
            </p>
            <Link href="/Mili/#treatment">
              <a className={styles.treatmentBtn}>{t("learn_more")}</a>
            </Link>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "40px" }} className={styles.introduction}>
        <div className={styles.row}>
          <h2
            style={{ textAlign: "center" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t("treated_cases_intro")}
          </h2>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("clubfoot_before")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/before.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("clubfoot_after")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/after.jpg" />
          </div>
        </div>
      </section>
      <span className="myHr" />
      <h2 align="center">{t("some_exemples")}</h2>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("first_case_before")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/first-case-1.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("first_case_after_two_weeks")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/first-case-2.jpg" />
          </div>
        </div> 
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>
              {t("first_case_after_three_weeks")}
            </h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/first-case-3.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("first_case_after_one_month")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/first-case-4.jpg" />
          </div>
        </div>
      </section>
      <span className="myHr" />
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("second_case_before")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/second-case-1.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>
              {t("second_case_after_three_sessions")}
            </h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/second-case-2.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>
              {t("second_case_after_seven_sessions")}
            </h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/second-case-3.jpg" />
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={locale === "ar" ? styles.reverseRow : styles.row}>
          <div data-aos="slide-right" className={styles.col4}>
            <h1 className={styles.index}>{t("second_case_after_ten_years")}</h1>
          </div>
          <div data-aos="slide-left" className={styles.col8}>
            <img src="/images/treatedCases/second-case-4.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TreatedCases;
