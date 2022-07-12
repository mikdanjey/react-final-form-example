import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const initialValues = {
    options: [
        {
            isList: true,
            maxLength: undefined,
            title: "Title number 1"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 2"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 3"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 4"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 5"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 6"
        },
        {
            isList: false,
            maxLength: undefined,
            title: "Title number 7"
        }
    ]
};

export const NestedForm = () => (
    <Styles>
        <h1>🏁 React Final Form - Array Fields</h1>
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            mutators={{
                ...arrayMutators
            }}
            render={({
                dirty,
                handleSubmit,
                // mutators: { push, pop, unshift }, // injected from final-form-arrays above
                pristine,
                reset,
                submitting,
                values,
                form,
            }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <FieldArray name="options">
                            {({ fields }) => {
                                return (
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                console.log("MOVING");
                                            }}
                                        >
                                            Move
                                        </button>
                                        {fields.map((name, index) => (
                                            <div
                                                key={name}
                                                style={{ border: "1px solid gray", padding: "10px" }}
                                            >
                                                <label>Option #{index + 1}</label>
                                                <Field name={`${name}.title`}>
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input input={input} meta={meta} />
                                                            <span
                                                                style={{
                                                                    color: meta.dirty ? "red" : "initial"
                                                                }}
                                                            >
                                                                {JSON.stringify(meta.dirty)}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Field>
                                                <Field name={`${name}.isList`} type="checkbox">
                                                    {({ input: listInput, meta: listMeta }) => (
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                {...listInput}
                                                                meta={listMeta}
                                                            />
                                                            <div>
                                                                {listInput.value === true ? (
                                                                    <Field
                                                                        type="number"
                                                                        name={`${name}.maxLength`}
                                                                        component="input"
                                                                        min={0}
                                                                        max={1000}
                                                                    />
                                                                ) : (
                                                                    <div>Something else</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </Field>
                                                <label style={{ display: "inline-block" }}>
                                                    Option is a List
                                                </label>
                                                <div>
                                                    <span
                                                        onClick={() => fields.remove(index)}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        Delete ❌
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }}
                        </FieldArray>

                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                        <div>{`Form is Dirty: ${dirty}`}</div>
                    </form>
                );
            }}
        />
    </Styles>
);