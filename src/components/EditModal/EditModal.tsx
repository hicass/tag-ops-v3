import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function EditModal({
  post,
  editModalActive,
  setEditModalActive,
  setTxtEditorActive,
  handleSetPublished,
}: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setEditModalActive(false);
      }
    };

    if (editModalActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editModalActive]);

  const handleEdit = () => {
    setTxtEditorActive(true);
    setEditModalActive(false);
  }

  return (
    <div
      className="w-1/3 flex flex-col justify-end absolute edit-modal gap-1"
      ref={modalRef}
    >
      <button
        className="edit-modal-btn"
        onClick={handleEdit}
      >
        Edit
        <Image src="/icons/edit.svg" alt="Edit Icon" width={20} height={20} />
      </button>

      <button className="edit-modal-btn" onClick={handleSetPublished}>
        {post.published ? 'Draft' : 'Publish'}
        {post.published ? (
          <Image
            src="/icons/eye-closed.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/icons/eye-star.svg"
            alt="Edit Icon"
            width={20}
            height={20}
          />
        )}
      </button>

      <button className="edit-modal-btn red">
        Delete{' '}
        <Image src="/icons/trash.svg" alt="Edit Icon" width={20} height={20} />
      </button>
    </div>
  );
}
