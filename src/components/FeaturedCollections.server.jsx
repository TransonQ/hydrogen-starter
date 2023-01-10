import { CacheLong, gql, Image, Link, useShopQuery } from '@shopify/hydrogen'

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  })

  return (
    <section className='grid w-full gap-4 p-6 md:gap-8 md:p-8 lg:p-12'>
      <h2 className='font-bold whitespace-pre-wrap max-w-prose text-lead'>
        Collections
      </h2>
      <div className='grid grid-flow-row grid-cols-1 gap-2 gap-y-6 md:gap-4 lg:gap-6 false sm:grid-cols-3'>
        {collections.nodes.map((collection) => {
          return (
            <Link
              key={collection.id}
              to={`/collections/${collection.handle}`}
            >
              <div className='grid gap-4'>
                {collection?.image && (
                  <Image
                    className='rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover'
                    width={'100%'}
                    height={336}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 className='font-medium whitespace-pre-wrap max-w-prose text-copy'>
                  {collection.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
