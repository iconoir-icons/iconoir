import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Quote extends StatelessWidget {
  const Quote({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Quote.svg');
}
