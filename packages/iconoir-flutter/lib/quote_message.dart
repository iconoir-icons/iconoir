import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuoteMessage extends StatelessWidget {
  const QuoteMessage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/QuoteMessage.svg');
}
