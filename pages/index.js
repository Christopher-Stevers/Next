
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  console.log( allPostsData );
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Christopher Stevers. I'm an aspiring web dev from SW Ontario, Canada. "Just BUILD WEBSITES!"" --(Shoptalkshow)</p>
        <p>
          (This is a sample website - I'm building it on{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section> <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                 </small>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
