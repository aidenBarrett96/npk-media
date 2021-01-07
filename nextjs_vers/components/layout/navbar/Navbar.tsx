import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <br/>
      <Link href="/projects">
        <a>
          Projects
        </a>
      </Link>

      <hr/>
      <div>
        <p>dynamic page link tests</p>
        <Link href="/videos">
          <a>Videos </a>
        </Link> |
        <Link href="/websites">
          <a> Websites</a>
        </Link> | 
        <Link href="/social-media">
          <a> Social media</a>
        </Link>
      </div>
      <hr/>
    </div>
  )
}

export default Navbar