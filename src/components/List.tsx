import * as React from 'react'
import ListItem from './ListItem'
import { IUser } from "../interfaces"

type Props = {
  users: IUser[]
}

const List = ({ users }: Props) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <ListItem data={user} />
      </li>
    ))}
  </ul>
)

export default List
