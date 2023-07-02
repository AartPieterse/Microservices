'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-jsapi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ClassManagementModule.html" data-type="entity-link" >ClassManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' : 'data-bs-target="#xs-controllers-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' :
                                            'id="xs-controllers-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' }>
                                            <li class="link">
                                                <a href="controllers/ClassManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' : 'data-bs-target="#xs-injectables-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' :
                                        'id="xs-injectables-links-module-ClassManagementModule-2a6b5708e62ba5869f6b6a26d58c9f338d6f35d278778c055086372ae33662fc82fb88bf8ab853a1b4b51a7cb5c98ba0d0a6043ce766703ea659e84849cc7b1f"' }>
                                        <li class="link">
                                            <a href="injectables/ClassManagementRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassManagementRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClassManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleManagementModule.html" data-type="entity-link" >ModuleManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' : 'data-bs-target="#xs-controllers-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' :
                                            'id="xs-controllers-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' }>
                                            <li class="link">
                                                <a href="controllers/ModuleManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' : 'data-bs-target="#xs-injectables-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' :
                                        'id="xs-injectables-links-module-ModuleManagementModule-031b95d68175d6cf776f2227a6b5a8d803df6af7f6c42aa4b11f209198ea6f1960a138ecb05220c99b10481af14fb403e0a49ff3380f41001f93d3e6c9bde482"' }>
                                        <li class="link">
                                            <a href="injectables/ModuleManagementRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagementRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ModuleManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RmqModule.html" data-type="entity-link" >RmqModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RmqModule-b5850ccf249233d02e68ab0afc7a1105b4fcb1636b1e5a712e55e6122f562bfe22605e23fb18a92c1c0b5f529eba82847c1c08db540704c3157f62547e01068c"' : 'data-bs-target="#xs-injectables-links-module-RmqModule-b5850ccf249233d02e68ab0afc7a1105b4fcb1636b1e5a712e55e6122f562bfe22605e23fb18a92c1c0b5f529eba82847c1c08db540704c3157f62547e01068c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RmqModule-b5850ccf249233d02e68ab0afc7a1105b4fcb1636b1e5a712e55e6122f562bfe22605e23fb18a92c1c0b5f529eba82847c1c08db540704c3157f62547e01068c"' :
                                        'id="xs-injectables-links-module-RmqModule-b5850ccf249233d02e68ab0afc7a1105b4fcb1636b1e5a712e55e6122f562bfe22605e23fb18a92c1c0b5f529eba82847c1c08db540704c3157f62547e01068c"' }>
                                        <li class="link">
                                            <a href="injectables/RabbitmqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RabbitmqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentManagementModule.html" data-type="entity-link" >StudentManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' : 'data-bs-target="#xs-controllers-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' :
                                            'id="xs-controllers-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' }>
                                            <li class="link">
                                                <a href="controllers/StudentManagementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentManagementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' : 'data-bs-target="#xs-injectables-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' :
                                        'id="xs-injectables-links-module-StudentManagementModule-989ad9ff8a19813e7f7a350664dda0cea0a485a739f0072eb3ba8d4b8b4285b48826755678975083feb27ee2bc9a4dec852b4a5920c061a27d78235b9065edae"' }>
                                        <li class="link">
                                            <a href="injectables/StudentManagementRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentManagementRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentManagementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentManagementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudyProgramModule.html" data-type="entity-link" >StudyProgramModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' : 'data-bs-target="#xs-controllers-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' :
                                            'id="xs-controllers-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' }>
                                            <li class="link">
                                                <a href="controllers/StudyProgramController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyProgramController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' : 'data-bs-target="#xs-injectables-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' :
                                        'id="xs-injectables-links-module-StudyProgramModule-d9e2f2f222890878ece093943032bd22fb4170ecd5ff7fba4863af36434af33bf670aed8d2de2b584e3629180b5cc3272c4435c44afc208e547ed7672eec7080"' }>
                                        <li class="link">
                                            <a href="injectables/StudyProgramService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyProgramService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeacherModule.html" data-type="entity-link" >TeacherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' : 'data-bs-target="#xs-controllers-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' :
                                            'id="xs-controllers-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' }>
                                            <li class="link">
                                                <a href="controllers/TeacherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' : 'data-bs-target="#xs-injectables-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' :
                                        'id="xs-injectables-links-module-TeacherModule-c14ec0d98cfe78b06e5ceba835180bd1434abd0992c208d0b3546d741729edcab084a42e61abc871bcd6394ed5af7df29901b64eb68a7de61eedffdbc4bc4081"' }>
                                        <li class="link">
                                            <a href="injectables/TeacherRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeacherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestProgramModule.html" data-type="entity-link" >TestProgramModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' : 'data-bs-target="#xs-controllers-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' :
                                            'id="xs-controllers-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' }>
                                            <li class="link">
                                                <a href="controllers/TestProgramController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestProgramController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' : 'data-bs-target="#xs-injectables-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' :
                                        'id="xs-injectables-links-module-TestProgramModule-1a36e8df95901276615e36d42daf21848be9c4ea767a1ddcf48c500c0e1818f86ff9c5e82cf7d1a6b03319bb3afb22a176987e903767425a4fbb873c75c856a9"' }>
                                        <li class="link">
                                            <a href="injectables/TestProgramRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestProgramRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TestProgramService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestProgramService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ClassManagementController.html" data-type="entity-link" >ClassManagementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ModuleManagementController.html" data-type="entity-link" >ModuleManagementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StudentManagementController.html" data-type="entity-link" >StudentManagementController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StudyProgramController.html" data-type="entity-link" >StudyProgramController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TeacherController.html" data-type="entity-link" >TeacherController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TestProgramController.html" data-type="entity-link" >TestProgramController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractDocument.html" data-type="entity-link" >AbstractDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/applyClassDto.html" data-type="entity-link" >applyClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/applyModuleDto.html" data-type="entity-link" >applyModuleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialClassCommand.html" data-type="entity-link" >CreatePotentialClassCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialClassCommandHandler.html" data-type="entity-link" >CreatePotentialClassCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialModuleCommand.html" data-type="entity-link" >CreatePotentialModuleCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialModuleCommandHandler.html" data-type="entity-link" >CreatePotentialModuleCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialStudentCommand.html" data-type="entity-link" >CreatePotentialStudentCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialStudentCommandHandler.html" data-type="entity-link" >CreatePotentialStudentCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/createPotentialStudentDto.html" data-type="entity-link" >createPotentialStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialTestCommand.html" data-type="entity-link" >CreatePotentialTestCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePotentialTestCommandHandler.html" data-type="entity-link" >CreatePotentialTestCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/createPotentialTestDto.html" data-type="entity-link" >createPotentialTestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherDto.html" data-type="entity-link" >CreateTeacherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialClass.html" data-type="entity-link" >PotentialClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialClassRegisteredEvent.html" data-type="entity-link" >PotentialClassRegisteredEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialClassRegisteredEventHandler.html" data-type="entity-link" >PotentialClassRegisteredEventHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialModule.html" data-type="entity-link" >PotentialModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialModuleRegisteredEvent.html" data-type="entity-link" >PotentialModuleRegisteredEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialModuleRegisteredEventHandler.html" data-type="entity-link" >PotentialModuleRegisteredEventHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialStudent.html" data-type="entity-link" >PotentialStudent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialStudentRegisteredEvent.html" data-type="entity-link" >PotentialStudentRegisteredEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialStudentRegisteredEventHandler.html" data-type="entity-link" >PotentialStudentRegisteredEventHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialTest.html" data-type="entity-link" >PotentialTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialTestRegisteredEvent.html" data-type="entity-link" >PotentialTestRegisteredEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PotentialTestRegisteredEventHandler.html" data-type="entity-link" >PotentialTestRegisteredEventHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher-1.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherDto.html" data-type="entity-link" >UpdateTeacherDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AbstractRepository.html" data-type="entity-link" >AbstractRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassManagementRepository.html" data-type="entity-link" >ClassManagementRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassManagementService.html" data-type="entity-link" >ClassManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModuleManagementRepository.html" data-type="entity-link" >ModuleManagementRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModuleManagementService.html" data-type="entity-link" >ModuleManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RabbitmqService.html" data-type="entity-link" >RabbitmqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentManagementRepository.html" data-type="entity-link" >StudentManagementRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentManagementService.html" data-type="entity-link" >StudentManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyProgramService.html" data-type="entity-link" >StudyProgramService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherRepository.html" data-type="entity-link" >TeacherRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherService.html" data-type="entity-link" >TeacherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestProgramRepository.html" data-type="entity-link" >TestProgramRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestProgramService.html" data-type="entity-link" >TestProgramService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RmqModuleOptions.html" data-type="entity-link" >RmqModuleOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});