import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoginComponent from '../views/LoginView.vue';

describe('renderiza corretamente', () => {
    it('show minha instancia', () => {
        const warraper = mount(LoginComponent);

        expect(warraper.vm).toBeDefined();
    });
});
