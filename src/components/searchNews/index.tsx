import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export function SelectTopic ({ setTopic, topic }: { setTopic: Dispatch<SetStateAction<string>>, topic: string }) {
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTopic(evt.target.value)
  }

  return (
    <select onChange={handleChange} className="options" value={topic}>
      <option disabled>Select your news</option>
      <option className="topics" value="reactjs">
        React
      </option>
      <option className="topics" value="vuejs">
        VueJs
      </option>
      <option className="topics" value="angular">
        Angular
      </option>
    </select>
  )
}
