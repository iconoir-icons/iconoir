import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Trademark extends StatelessWidget {
  const Trademark({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Trademark.svg');
}
