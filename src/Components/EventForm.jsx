import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        startTime: '',
        endTime: '',
        title: '',
        description: '',
        postTo: {
            gov: false,
            moms: false,
            patch: false,
            sojourner: false,
            log: false,
        },
        testMode: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'testMode') {
                setFormData({
                    ...formData,
                    [name]: checked,
                });
            } else {
                setFormData({
                    ...formData,
                    postTo: {
                        ...formData.postTo,
                        [name]: checked,
                    },
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    const handleCancel = () => {
        setFormData({
            date: '',
            startTime: '',
            endTime: '',
            title: '',
            description: '',
            postTo: {
                gov: false,
                moms: false,
                patch: false,
                sojourner: false,
                log: false,
            },
            testMode: false,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Start Time:</label>
                <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>End Time:</label>
                <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                />
            </div>

            <div>
                <label>Post to:</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="gov"
                            checked={formData.postTo.gov}
                            onChange={handleChange}
                        />
                        Gov
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="moms"
                            checked={formData.postTo.moms}
                            onChange={handleChange}
                        />
                        Moms
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="patch"
                            checked={formData.postTo.patch}
                            onChange={handleChange}
                        />
                        Patch
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="sojourner"
                            checked={formData.postTo.sojourner}
                            onChange={handleChange}
                        />
                        Sojourner
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="log"
                            checked={formData.postTo.log}
                            onChange={handleChange}
                        />
                        Log
                    </label>
                </div>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="testMode"
                        checked={formData.testMode}
                        onChange={handleChange}
                    />
                    Test Mode
                </label>
            </div>

            <div>
                <button type="submit">Update</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default EventForm;
