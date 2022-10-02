import config from "../../config";
import { CategoryProps } from "../../models/Category";
import { NextCustomPage } from "../../types/generic";
import { BaseSyntheticEvent, useState, useEffect } from "react";
import styles from './styles.module.scss';

const Categories: NextCustomPage = () => {
    const [formActive, setFormActive] = useState(false)
    const [categories, setCategories] = useState<CategoryProps[]>([])

    const fetchCategories = async () => {
        const { categories } = await fetch(
            `${config.baseUrl}/api/category?limit=6`
        ).then((res) => res.json());

        setCategories(categories)
    }

    const handleDelete = async () => {

    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleSubmit = (
        e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, HTMLFormElement>
    ) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        fetch(`${config.baseUrl}/api/category`, {
            method: "POST",
            body: JSON.stringify(formProps),
        })
            .then((response) => response.json())
            .then((data) => {
                const { res } = data
                if (res === 'ok') {
                    fetchCategories()
                    setFormActive(false)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titles}>
                    <h1 className={styles.title}>Select Topic</h1>
                    <h3 className={styles.subtitle}>Featured Category</h3>
                </div>
                {formActive ? (
                    <button onClick={() => setFormActive(false)} className={styles.backBtn}>Back</button>
                ) : (
                    <button onClick={() => setFormActive(true)} className={styles.newBtn}>Add New</button>
                )}
            </div>
            {formActive ? (
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <span>New Category</span>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                    <label htmlFor="img">IMG link</label>
                    <input type="text" id="img" name="img" />
                    <button type="submit" className={styles.newBtn}>
                        Create new Category
                    </button>
                </form>
            ) : (
                <div className={styles.categoryWrapper}>
                    {categories.length ? categories.map(({ _id, img, title }) => (
                        <div key={_id} className={styles.category}>
                            <span className={styles.topic}>{title}</span>
                            <img className={styles.img} src={img} alt="img" />
                        </div>
                    )) : <h1>No categories to be found</h1>}
                </div>
            )}
        </div>
    );
};

Categories.layout = "default";

export default Categories;