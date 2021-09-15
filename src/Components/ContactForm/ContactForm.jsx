import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({ name: '' });
        this.setState({ number: '' });
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={ css.label}>
            Name
            <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            />

            </label>
                
            <label className={ css.label}>
                Number
                <input
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
                />

            </label>

                <button type="submit" className={css.submit}>Add name</button>
        </form>
        )
    }
}

export default ContactForm