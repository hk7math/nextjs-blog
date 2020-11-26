import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>{siteTitle}</h1>
        <ul>
          <li>數學</li>
          <li>教育</li>
          <li>未來</li>
        </ul>
        <p>奧數 - 從梳理線索到悟通思路，重點在於屢敗屢試以及邏輯解難，與常規課程到大學數學都不盡相同，前者著重規範，後者則重嚴謹，而奧數的樂趣則在於發現規律、發現數學=)</p>
        <p>牧人 - 在教育上，希望作為導引的角色，讓學生在數學草原上自由探索；牧亦可作木，木人意謂「十年樹木，百年樹人」，亦暗喻自己個性木訥，不擅辭令，行文亦會盡量精簡。</p>
        <p>巷 - 木人巷是少林弟子出山闖天下前得接受的考驗，此專頁希望集結香港初階奧數比賽的題解，如有題目亦歡迎分享！港字少了三點水，亦作精講去水之意，盡可能一圖一題，重點提出解題思路，如有錯漏，歡迎指正補充。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}