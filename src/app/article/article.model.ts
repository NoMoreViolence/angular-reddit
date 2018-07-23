export class Article {
  title: string
  link: string
  votes: number

  constructor(title: string, link: string, votes?: number) {
    this.title = title
    this.link = link
    this.votes = votes || 0
  }

  voteUp(): boolean {
    this.votes += 1
    return false
  }

  voteDown(): boolean {
    this.votes -= 1
    return false
  }

  // return domain in url
  domain(): string {
    try {
      // https:// remove
      const domainAndPath: string = this.link.split('//')[1]
      // first domain
      return domainAndPath.split('/')[0]
    } catch (err) {
      return null
    }
  }
}
