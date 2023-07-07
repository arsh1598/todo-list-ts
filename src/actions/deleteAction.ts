export default function deleteAction(id:number) {
    return {
      type: 'DELETE',
      payload: id
    };
  };