/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Styles from '../Styles';
import { Form, Field, FormSpy } from 'react-final-form';
import { RenderCount } from '../Components/RenderCount';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
}

export const Simple = () => (
    <Styles>
        <h1>React Final Form - Simple Example</h1>
        <Form
            onSubmit={onSubmit}
            initialValues={{ firstName: "Mani", stooge: 'larry', employed: false }}
            subscription={{ submitting: true, pristine: true }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                        <RenderCount />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                        <RenderCount />
                    </div>
                    <div>
                        <label>Employed</label>
                        <Field name="employed" component="input" type="checkbox" />
                        <RenderCount />
                    </div>
                    <div>
                        <label>Favorite Color</label>
                        <Field name="favoriteColor" component="select">
                            <option />
                            <option value="#ff0000">?????? Red</option>
                            <option value="#00ff00">???? Green</option>
                            <option value="#0000ff">???? Blue</option>
                        </Field>
                        <RenderCount />
                    </div>
                    <div>
                        <label>Toppings</label>
                        <Field name="toppings" component="select" multiple>
                            <option value="chicken">???? Chicken</option>
                            <option value="ham">???? Ham</option>
                            <option value="mushrooms">???? Mushrooms</option>
                            <option value="cheese">???? Cheese</option>
                            <option value="tuna">???? Tuna</option>
                            <option value="pineapple">???? Pineapple</option>
                        </Field>
                        <RenderCount />
                    </div>
                    <div>
                        <label>Sauces</label>
                        <div>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="ketchup"
                                />{' '}
                                Ketchup
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="mustard"
                                />{' '}
                                Mustard
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="mayonnaise"
                                />{' '}
                                Mayonnaise
                            </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="guacamole"
                                />{' '}
                                Guacamole ????
                            </label>
                        </div>
                        <RenderCount />
                    </div>
                    <div>
                        <label>Best Stooge</label>
                        <div>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="larry"
                                />{' '}
                                Larry
                            </label>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="moe"
                                />{' '}
                                Moe
                            </label>
                            <label>
                                <Field
                                    name="stooge"
                                    component="input"
                                    type="radio"
                                    value="curly"
                                />{' '}
                                Curly
                            </label>
                        </div>
                        <RenderCount />
                    </div>
                    <div>
                        <label>Notes</label>
                        <Field name="notes" component="textarea" placeholder="Notes" />
                        <RenderCount />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <FormSpy subscription={{ values: true }}>
                        {({ values }) => (
                            <>
                                <pre>
                                    {JSON.stringify(values, 0, 2)}
                                </pre>
                                <RenderCount />
                            </>
                        )}
                    </FormSpy>

                </form>
            )}
        />
    </Styles>
)
