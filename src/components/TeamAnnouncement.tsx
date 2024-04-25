type TeamAnnouncementProps = {};

export function TeamAnnouncement(props: TeamAnnouncementProps) {
  return (
    <a
      className="rounded-md border border-dashed border-purple-700 px-3 py-1.5 text-purple-400 transition-colors hover:border-yellow-700 hover:text-white"
      href="/teams"
    >
      <span className="relative -top-[0.5px] mr-4 text-xs font-semibold  text-white">
        Täzelik 
      </span>{' '}
      <span className={'hidden sm:inline'}>Sanly Ýörelge - bilen utgaşdyrlan meýilnama döretmek. <span className='font-semibold'>Giňişleýin!</span></span>
      <span className={'inline sm:hidden'}>Sanly Ýörelge - bilen utgaşdyrlan meýilnama döretmek!</span>
    </a>
  );
}
