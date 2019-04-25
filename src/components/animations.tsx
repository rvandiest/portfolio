import React, { CSSProperties } from "react";

export class FadeIn extends React.Component<{ duration: string }> {
    public render() {
        return (
            <div style={{ animationDuration: this.props.duration }} className={`animation-fade-in`}>{this.props.children}</div>
        )
    }
}

export class FadeOut extends React.Component<{ duration: string }> {
    public render() {
        return (
            <div style={{ animationDuration: this.props.duration }} className={`animation-fade-out`}>{this.props.children}</div>
        )
    }
}

export class SlideIn extends React.Component<{ from: 'right' | 'left' | 'bottom' | 'top', duration: string }>  {
    public render() {
        return (
            <div style={{ animationDuration: this.props.duration }} className={`animation-slide-from-${this.props.from}`}>{this.props.children}</div>
        )
    }
}