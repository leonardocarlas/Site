import { parseISO, format } from 'date-fns'
import { type } from 'os'

type DateString = string;
type Date = 
{
    dateString : DateString
};

export default function Date( { dateString } : Date ) {

  const date = parseISO(dateString)
  
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
    
}