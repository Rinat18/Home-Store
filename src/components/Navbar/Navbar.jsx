import React from 'react';
import './Navbar.scss';
export default function Navbar() {
	return (
		<>
			<div className="header">
				<div className="header__container">
					<div className="header__logo">
						RINAT<span>HUB</span>
					</div>
					<div className="header__buttons">
						<button className="header__cart">
							<svg
								width="24"
								height="25"
								viewBox="0 0 14 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13.36 7.12C13.3771 6.98042 13.3645 6.83881 13.3232 6.7044C13.2818 6.57 13.2126 6.44583 13.12 6.34C13.0263 6.23333 12.9109 6.14784 12.7816 6.08922C12.6523 6.03059 12.512 6.00018 12.37 6H1.62998C1.48799 6.00018 1.34767 6.03059 1.21836 6.08922C1.08904 6.14784 0.973688 6.23333 0.879978 6.34C0.787381 6.44583 0.718144 6.57 0.676789 6.7044C0.635435 6.83881 0.622891 6.98042 0.639978 7.12L1.38998 13.12C1.41945 13.3639 1.53769 13.5884 1.72213 13.7507C1.90657 13.913 2.1443 14.0018 2.38998 14H11.63C11.8757 14.0018 12.1134 13.913 12.2978 13.7507C12.4823 13.5884 12.6005 13.3639 12.63 13.12L13.36 7.12Z"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.5 6V5.5C2.5 4.30653 2.97411 3.16193 3.81802 2.31802C4.66193 1.47411 5.80653 1 7 1C8.19347 1 9.33807 1.47411 10.182 2.31802C11.0259 3.16193 11.5 4.30653 11.5 5.5V6"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M5 9V11" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M9 9V11" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</button>
						<button className="header__auth">
							<svg
								width="24"
								height="24"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 8C8.38071 8 9.5 6.88071 9.5 5.5C9.5 4.11929 8.38071 3 7 3C5.61929 3 4.5 4.11929 4.5 5.5C4.5 6.88071 5.61929 8 7 8Z"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M2.73 11.9001C3.17624 11.1676 3.80341 10.5622 4.55121 10.1422C5.29901 9.72211 6.14229 9.50146 7 9.50146C7.85771 9.50146 8.70099 9.72211 9.44879 10.1422C10.1966 10.5622 10.8238 11.1676 11.27 11.9001"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
									stroke="#fff"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
