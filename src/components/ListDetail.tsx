import * as React from 'react'

import { IUser } from '../interfaces/index'

type ListDetailProps = {
  user: IUser
}

const ListDetail = ({ user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
