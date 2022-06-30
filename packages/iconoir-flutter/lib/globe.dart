import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Globe extends StatelessWidget {
  const Globe({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Globe.svg');
}
