import React from 'react'
import { Link } from 'react-router-dom';
import { StyledHeader } from '../../styles/components/headerStyles';
function Header() {
    return (
        <StyledHeader>
            
                <h1 className="title">Grade Tracker</h1>
                
                    <Link style={linkStyle} to="/">
                    <svg height="511pt" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/></svg>
                    Home
                    </Link> {' '} | {' '}  
                    <Link style={linkStyle} to="/about">
                    <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z"/><path d="m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z"/><path d="m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z"/></g></svg>
                    About
                    </Link> {' '} | {' '}  
                    <Link style={linkStyle} to="/instructions">
                    <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m121.403 209.555h38.951c10.637 0 19.291-8.631 19.291-19.239v-38.858c0-10.608-8.654-19.239-19.291-19.239h-38.951c-10.621 0-19.262 8.631-19.262 19.239v38.858c0 10.608 8.641 19.239 19.262 19.239zm.738-57.338h37.503v37.34h-37.503z"/><path d="m468.709 279.475c-4.789 0-9.596 1.025-13.982 3.048-3.372-10.689-11.397-17.562-20.58-20.428v-214.91c-.001-26.018-21.208-47.185-47.275-47.185h-328.597c-26.067 0-47.275 21.167-47.275 47.185v26.614c0 12.499 10.183 22.668 22.7 22.668h9.745v375.577c0 12.499 10.183 22.668 22.7 22.668h264.652c17.544 11.368 36.679 17.289 56.118 17.288 10.808 0 21.713-1.829 32.484-5.566 23.233-8.059 43.99-24.909 58.448-47.447 15.33-23.898 23.335-53.304 23.15-84.981v-61.022c0-21.999-16.243-33.509-32.288-33.509zm-405.264 192.569v-375.577h91.625c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-121.37c-1.463 0-2.7-1.223-2.7-2.671v-26.613c0-14.991 12.235-27.187 27.275-27.187h289.979c-5.451 7.69-8.656 17.071-8.656 27.187v26.614c0 1.448-1.236 2.671-2.7 2.671h-91.823c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h91.823c12.517 0 22.7-10.169 22.7-22.668v-26.615c0-14.991 12.235-27.187 27.274-27.187s27.274 12.196 27.274 27.187v214.905c-1.349.421-2.677.918-3.965 1.512-4.56-14.464-17.636-21.965-30.582-21.965-4.176 0-8.362.779-12.274 2.321v-56.306c0-21.999-16.235-33.51-32.273-33.51-16.039 0-32.274 11.51-32.274 33.51v144.491c0 4.551.083 8.701.155 12.363.009.395.017.795.024 1.196l-23.244-24.919c-13.541-14.495-33.12-15.982-47.611-3.614-14.26 12.171-20.829 36.126-4.917 56.547l69.408 89.083c3.301 4.236 6.733 8.204 10.273 11.915h-240.721c-1.464 0-2.7-1.223-2.7-2.67zm417.552-97.98c.318 54.464-26.434 99.007-68.153 113.478-35.294 12.24-72.857-1.601-100.474-37.033l-69.407-89.082c-8.278-10.624-5.084-22.896 2.124-29.047 1.682-1.435 4.901-3.608 8.969-3.608 3.253 0 7.05 1.389 11.037 5.657l24.351 26.106c6.873 7.362 15.42 16.525 24.899 12.683 7.551-3.063 8.254-11.597 8.485-14.401.317-3.857.222-8.646.101-14.709-.07-3.568-.151-7.612-.151-11.964v-144.492c0-12.861 10.225-13.512 12.274-13.512s12.273.651 12.273 13.512v143.16c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-55.665c0-12.861 10.225-13.512 12.274-13.512 3.235 0 6.323 1.155 8.47 3.171 2.524 2.368 3.804 5.847 3.804 10.342v55.665c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-36.733c0-12.87 10.218-13.522 12.267-13.522 3.236 0 6.325 1.157 8.475 3.173 2.526 2.371 3.807 5.852 3.807 10.348v36.733c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-17.828c0-12.86 10.236-13.511 12.288-13.511 3.24 0 6.333 1.156 8.482 3.172 2.525 2.367 3.806 5.846 3.806 10.339v61.08z"/><path d="m201.721 142.218c0 5.522 4.477 9.999 10 9.999h80.032c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-80.032c-5.523 0-10 4.477-10 9.999z"/><path d="m274.764 189.557h-63.043c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h63.043c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999z"/><path d="m112.141 266.92h152.736c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-152.736c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z"/><path d="m112.141 324.258h82.391c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-82.391c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z"/><path d="m112.141 381.624h72.561c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-72.561c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z"/><path d="m218.596 418.964h-106.455c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h106.455c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999z"/><path d="m200.072 96.467h.057c5.523 0 9.972-4.477 9.972-9.999s-4.505-9.999-10.028-9.999-10 4.477-10 9.999 4.476 9.999 9.999 9.999z"/></g></svg>
                    Instructions
                    </Link> {' '} | {' '}
                    <Link style={linkStyle} to="/settings">
                    <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"/><path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"/></svg>
                    Settings
                    </Link>
               
            
        </StyledHeader>
    )
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;