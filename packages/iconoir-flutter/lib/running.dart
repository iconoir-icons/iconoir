import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Running extends StatelessWidget {
  const Running({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Running.svg');
}
