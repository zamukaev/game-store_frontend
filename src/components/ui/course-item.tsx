interface ICourseItemProps {
    onDelete: () => Promise<void>;
}

export function CourseItem({ onDelete }: ICourseItemProps) {
    const handleDelete = async () => {
        await onDelete();
    };

    return (
        <div>
            <button onClick={handleDelete}>Удалить</button>
        </div>
    );
}
