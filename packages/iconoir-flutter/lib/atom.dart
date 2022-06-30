import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Atom extends StatelessWidget {
  const Atom({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Atom.svg');
}
