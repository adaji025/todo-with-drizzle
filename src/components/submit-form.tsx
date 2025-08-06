import React from 'react'
import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';

const SubmitForm = () => {
 const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save changes"}
    </Button>
  );
}

export default SubmitForm